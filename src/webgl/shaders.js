export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uImageResolution;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uHoverStrength;
  uniform float uFocusY;

  varying vec2 vUv;

  // ruído simples para grão de filme
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  // ajusta UV para comportamento tipo "background-size: cover", com
  // ponto focal vertical ajustável (0 = topo da imagem, 1 = base),
  // equivalente ao "object-position" do CSS.
  vec2 coverUv(vec2 uv, vec2 res, vec2 imgRes, float focusY) {
    float resRatio = res.x / res.y;
    float imgRatio = imgRes.x / imgRes.y;
    vec2 scale = resRatio > imgRatio
      ? vec2(1.0, imgRatio / resRatio)
      : vec2(resRatio / imgRatio, 1.0);
    vec2 offset = vec2((1.0 - scale.x) * 0.5, (1.0 - scale.y) * (1.0 - focusY));
    return uv * scale + offset;
  }

  void main() {
    vec2 uv = coverUv(vUv, uResolution, uImageResolution, uFocusY);

    // deriva lenta e contínua (a imagem "respira" mesmo sem interação)
    vec2 drift = vec2(
      sin(uTime * 0.05) * 0.006,
      cos(uTime * 0.04) * 0.006
    );

    // distorção tipo líquido ao redor do ponteiro
    vec2 toMouse = uv - uMouse;
    float dist = length(toMouse);
    float falloff = smoothstep(0.45, 0.0, dist);
    float ripple = sin(dist * 22.0 - uTime * 2.2) * 0.5 + 0.5;
    vec2 rippleOffset = normalize(toMouse + 0.0001) * ripple * falloff * 0.035 * uHoverStrength;

    vec2 distortedUv = uv + drift - rippleOffset;

    // leve aberração cromática, mais forte perto do ponteiro
    float aberration = 0.006 * falloff * uHoverStrength + 0.0015;
    float r = texture2D(uTexture, distortedUv + vec2(aberration, 0.0)).r;
    float g = texture2D(uTexture, distortedUv).g;
    float b = texture2D(uTexture, distortedUv - vec2(aberration, 0.0)).b;

    vec3 color = vec3(r, g, b);

    // vinheta sutil
    float vignette = smoothstep(1.05, 0.25, distance(vUv, vec2(0.5)));
    color *= mix(0.72, 1.0, vignette);

    // grão de filme
    float grain = (random(vUv * uResolution * 0.6 + uTime * 60.0) - 0.5) * 0.045;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`;
