function IntroImage(props: { src: string, description: string }) {
  return <img src={props.src} alt={props.description} style={{width: "100%"}} />;
}

export default IntroImage;
