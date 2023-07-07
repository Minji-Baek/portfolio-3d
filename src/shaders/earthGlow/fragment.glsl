varying vec3 vNormal;
uniform float uZoom;


void main() {
  vec3 lightSource = vec3(0.0, 0.0, 1.0);
  float strength = max(1.0, pow(1.0 / (uZoom / 2.0), 5.0)) ;
  float intensity = pow(0.8 -  dot(vNormal, lightSource), 5.0) * strength ; // 내적 반대 => 진한부분 더 진하게, 연한부분 더 연하게 하기 위해 5제곱 
  // 내적을 구해주고있다. 내적은 두백터의 방향이 얼마나 일치하는지에 대한 척도를 제공하면서 두벡터가 같은 방향을 가르키면 양수가 되고 반대 방향을 가르키면 내적은 음수가 된다. 

  vec3 puppleColor = vec3(0.525, 0.335, 0.746); 
  
  gl_FragColor = vec4(puppleColor, 1.0) * intensity;


}