//button_container//

const domContainer =
document.querySelector('#like_button_container');
const root =
ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));


export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
