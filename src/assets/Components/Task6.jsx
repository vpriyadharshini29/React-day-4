function DefaultProps({ name }) {
  return <p>Hello, {name}!</p>;
}

DefaultProps.defaultProps = {
  name: "Guest",
};

export default DefaultProps;
