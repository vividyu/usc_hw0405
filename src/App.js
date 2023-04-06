import { Tag, Icon } from "./MyTabsComponent.js";
import "./App.css"

const ICON = "https://w7.pngwing.com/pngs/336/860/png-transparent-shiba-inu-dogecoin-cryptocurrency-wallet-doge-mammal-carnivoran-dog-like-mammal.png";
function App() {
  return (
    <div className="container">
      <Tag>
        <div title={"Section title 1"}>Content of section 1</div>
      </Tag>
      <Tag color="purple" borderRadius="100px">
        <div title={"Section title 2"}>Content</div>
      </Tag>

      <Icon src={ICON}></Icon>

      <Tag>
        <div title={"Icon inside tag"}>
          <Icon src={ICON}></Icon>
          Content
        </div>
      </Tag>
    </div>
  );
}

export default App;
