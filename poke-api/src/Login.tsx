import Button from "@mui/material/Button";

function autheticate() {
  alert("Hey");
}

export default function Login() {
  return (
    <>
      {" "}
      <h1>PokéApi</h1>
      <Button variant="outlined" onClick={autheticate}>
        Log in
      </Button>
    </>
  );
}
