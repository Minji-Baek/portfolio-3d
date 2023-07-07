  uniform sampler2D uTexture;
  varying vec2 vUv;
  varying float vDistance;
  
  void main() {

    vec4 map = texture2D(uTexture, vUv);
    vec3 col = 1.0 - map.rgb;
    float alpha = col.g;

    vec3 puppleColor = vec3(0.196, 0.09, 0.356);
    float strength = mix(map.rgb * 4.0, puppleColor, vDistance).b * 2.0;
    
    vec3 finalCol = puppleColor * strength;

    gl_FragColor = vec4(finalCol, alpha * finalCol.b);

  }