import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // // Page 1, and there is the next page
    // if (curPage === 1 && numPages > 1) this._generateMarkupBtn(`next`);
    // // Last page
    // if (curPage === numPages && numPages > 1) this._generateMarkupBtn(`prev`);
    // //Other page in the middle
    // if (curPage < numPages) this._generateMarkupBtn(`both`);

    // Page 1, and there is the next page
    if (curPage === 1 && numPages > 1) {
      return `<button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `<button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
    }

    //Other page in the middle
    if (curPage < numPages) {
      return `
    <button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }

    // Page 1, and there is NO next page
    return ``;
  }

  //   _generateMarkupBtn(btn) {
  //     const curPage = this._data.page;
  //     if (btn === `next` || `both`)
  //       return `
  //     <button class="btn--inline pagination__btn--next">
  //       <span>Page ${curPage + 1}</span>
  //       <svg class="search__icon">
  //         <use href="${icons}#icon-arrow-right"></use>
  //       </svg>
  //     </button>`;

  //     if (btn === `prev` || `both`)
  //       return `
  //     <button class="btn--inline pagination__btn--prev">
  //       <svg class="search__icon">
  //         <use href="${icons}#icon-arrow-left"></use>
  //       </svg>
  //       <span>Page ${curPage - 1}</span>
  //     </button>`;
  //   }
}

export default new PaginationView();
