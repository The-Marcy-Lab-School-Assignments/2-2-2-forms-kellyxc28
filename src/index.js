/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (e) => {
  e.preventDefault();
};

const submitButton = document.querySelector('#new-user-form');
submitButton.addEventListener('submit', handleSubmit);
