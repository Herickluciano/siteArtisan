
function h() {
    return(<button onClick={() => h()}>Click This Button </button>);
}

export default h;
