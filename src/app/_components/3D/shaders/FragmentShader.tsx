const FragmentShader = `
uniform float u_intensity;
uniform float u_time;
varying vec2 vUv;
varying float vDisplacement;
void main() {
  float distort = 0.0 * vDisplacement * u_intensity;
  vec3 color = vec3(abs(vUv - 0.85) * 2.0  * (0.9 - distort), 1.0);
  gl_FragColor = vec4(color, 1.0);
}`;

export default FragmentShader;