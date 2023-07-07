uniform sampler2D uTexture;
uniform float uTime;
varying vec2 vUv;
varying float vDistance;


float circle (vec2 coord, float r){
  float fromCenter = length(coord - 0.5);
  float strength = r / fromCenter - r * 2.0;
  return strength;
}
  float random(vec2 uv) {
    return fract(dot(uv, vec2(12.9898, 78.232)));
  }
  void main() {

    vec4 map = texture2D(uTexture, vUv);
    vec3 col = 1.0 - map.rgb;

    float strength = circle(gl_PointCoord, 0.03);
    float alpha = col.b * strength * vDistance; 
    float randamNumber = random(vUv + uTime / 350.0);

    // vec3 puppleColor = vec3(0.7, 0.0, 1.0);
    vec3 puppleColor = vec3(0.470, 0.08, 0.619);
    vec3 deepPuppleColor = vec3(0.187, 0.036, 0.213);

    vec3 finalCol = mix(puppleColor, deepPuppleColor, randamNumber); 

    gl_FragColor = vec4(finalCol, alpha );

  }