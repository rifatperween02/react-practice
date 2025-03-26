//defaultPrevent -> remove some default behviour associated w them
//eg. in form submit event, on click button, the whole page reload bydefault, so used preventDefault

export default function Signup() {
  return (
    <form onSubmit={e=> {
        e.preventDefault();
        alert('Submitting');
    }}>
    <input/>
    <button type="submit">Send</button>
    </form>
  )
}
