import html from "html-literal";
import { Links } from "../store";

export default Links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${Links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="bio.html">Bio</a>
      </li>
      <li>
        <a href="pizza.html">Pizza</a>
      </li>
      <li>
        <a href="order.html">Order</a>
      </li>
    </ul>
  </nav>
`;
