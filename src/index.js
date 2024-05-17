/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const usernameValue = form.username.value;
  const usernameResults = document.querySelector('#results-username');
  usernameResults.textContent = usernameValue;
};

const submitButton = document.querySelector('#new-user-form');
submitButton.addEventListener('submit', handleSubmit);
