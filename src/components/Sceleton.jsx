import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="77" cy="114" r="2" /> 
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="273" rx="11" ry="11" width="280" height="27" /> 
    <rect x="0" y="313" rx="17" ry="17" width="280" height="88" /> 
    <rect x="7" y="415" rx="13" ry="13" width="72" height="42" /> 
    <rect x="101" y="414" rx="18" ry="18" width="173" height="45" />
  </ContentLoader>
)

export default Sceleton;

