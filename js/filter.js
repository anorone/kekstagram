import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';

const picturesFilter = document.querySelector('.img-filters');
const filterForm = picturesFilter.querySelector('.img-filters__form');
const filterButtons = filterForm.querySelectorAll('.img-filters__button');

const addFilters = (data, render) => {
  picturesFilter.classList.remove('img-filters--inactive');

  const filters = {
    default: () => data,
    random: () => _.shuffle(data).slice(0, 10),
    discussed: () => _.sortBy(data, (item) => -item.comments.length),
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', _.throttle(() => {
      const activeFilter = filterForm.querySelector('.img-filters__button--active');
      activeFilter.classList.remove('img-filters__button--active');
      button.classList.add('img-filters__button--active');

      const filterMethod = _.last(button.id.split('-'));
      const filteredData = filters[filterMethod]();
      render(filteredData);
    }, 500));
  });
};

export default addFilters;
