export const FormButton = (props) => (
  <div id="button" class="row">
    <button onClick={() => console.log("Button Clicked")}>{props.title}</button>
  </div>
);
