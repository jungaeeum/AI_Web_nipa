const API_KEY = `d011d1b9fce246108e987158ff50d2f8`;
let newsList = [];

let totalResults = 0;
let page = 1;
let totalPage = 1;
const pageSize = 10;
const groupSize = 5;

let url = new URL("https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10");
const menus = document.querySelectorAll(".menus button");
menus.forEach((menu) => menu.addEventListener("click", (event) => getNewsByCategory(event)));

const getNews = async (url) => {
  try {
    let header = new Headers();
    header.append("x-api-key", API_KEY);
    url.searchParams.set("page", page); // 8.page를 달아준다

    const response = await fetch(url, { headers: header });

    const data = await response.json();
    if (response.status == 200) {
      if (data.total_hits == 0) {
        console.log("A", data);
        page = 0;
        totalPage = 0;
        paginationRender();
        throw new Error("No result for this search");
      }
      console.log("B", data);
      newsList = data.articles;
      totalPage = data.total_pages;
      render();
      paginationRender();
    } else {
      page = 0;
      totalPage = 0;
      paginationRender();
      throw new Error(data.message);
    }
  } catch (error) {
    console.log("에러객체", error.name);
    errorRender(error.message);
    page = 0;
    totalPage = 0;
    paginationRender();
  }
};

const getLatestNews = async () => {
  page = 1; // 9. 새로운거 search마다 1로 리셋
  url = new URL(`https://newsapi.org/v2/top-headlines?country=KR&apiKey=${API_KEY}`);
  getNews(url);
};

const getNewsByCategory = async (event) => {
  page = 1; // 9. 새로운거 search마다 1로 리셋
  const category = event.target.textContent.toLowerCase();
  url = new URL(`https://newsapi.org/v2/top-headlines?country=KR&category=${category}&apiKey=${API_KEY}`);
  getNews(url);
};

const getNewsByKeyword = async () => {
  page = 1; // 9. 새로운거 search마다 1로 리셋
  const keyword = document.getElementById("search-input").value;
  url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`);
  getNews(url);
};

const render = () => {
  const newsHTML = newsList
    .map(
      (news) =>
        ` <div class="row news">
    <div class="col-lg-4">
        <img src="${
          news.urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
        }" alt="" class="news-img" />

    </div>
    <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>
            ${news.description}
        </p>
        <div>
            ${news.source.name} * ${news.publishedAt}
        </div>

    </div>

</div>`
    )
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};

const errorRender = (errorMessage) => {
  const errorHTML = `<div class="alert alert-danger" role="alert">
        ${errorMessage}
    </div>`;

  document.getElementById("news-board").innerHTML = errorHTML;
};

const pageClick = (pageNum) => {
  //7.클릭이벤트 세팅
  page = pageNum;
  window.scrollTo({ top: 0, behavior: "smooth" });
  getNews();
};

const paginationRender = () => {
  // 1.1~5까지를 보여준다
  // 2.6~10을 보여준다 => last, first 가필요
  // 3.만약에 first가 6 이상이면 prev 버튼을 단다
  // 4.만약에 last가 마지막이 아니라면 next버튼을 단다
  // 5.마지막이 5개이하이면 last=totalpage이다
  // 6.페이지가 5개 이하라면 first = 1이다
  let paginationHTML = ``;
  let pageGroup = Math.ceil(page / 5);
  let last = pageGroup * 5;
  if (last > totalPage) {
    last = totalPage;
  }
  let first = last - 4 <= 0 ? 1 : last - 4; // 첫그룹이 5이하이면
  if (first >= 5) {
    paginationHTML = `<li class="page-item" onclick="pageClick(1)">
                        <a class="page-link" href='#js-bottom'>&lt;&lt;</a>
                      </li>
                      <li class="page-item" onclick="pageClick(${page - 1})">
                        <a class="page-link" href='#js-bottom'>&lt;</a>
                      </li>`;
  }
  for (let i = first; i <= last; i++) {
    paginationHTML += `<li class="page-item ${i == page ? "active" : ""}" >
                        <a class="page-link" href='#js-bottom' onclick="pageClick(${i})" >${i}</a>
                       </li>`;
  }

  if (last < totalPage) {
    paginationHTML += `<li class="page-item" onclick="pageClick(${page + 1})">
                        <a  class="page-link" href='#js-program-detail-bottom'>&gt;</a>
                       </li>
                       <li class="page-item" onclick="pageClick(${totalPage})">
                        <a class="page-link" href='#js-bottom'>&gt;&gt;</a>
                       </li>`;
  }

  document.querySelector(".pagination").innerHTML = paginationHTML;
};

const moveToPage = (pageNum) => {
  page = pageNum;
  getNews();
};

getLatestNews();

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
};

const openSearchBox = () => {
  let inputArea = document.getElementById("input-area");
  if (inputArea.style.display === "inline") {
    inputArea.style.display = "none";
  } else {
    inputArea.style.display = "inline";
  }
};
