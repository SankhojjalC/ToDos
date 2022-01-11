export const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handler}
    />
  </div>
);
