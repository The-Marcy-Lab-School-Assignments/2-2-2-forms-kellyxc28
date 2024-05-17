/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const usernameValue = form.username.value;
  const usernameResults = document.querySelector('#results-username');
  usernameResults.textContent = usernameValue;

  const codingLevelValue = form.codingLevel.value;
  const codingLevelResults = document.querySelector('#results-coding-level');
  codingLevelResults.textContent = codingLevelValue;

  const locationValue = form.location.value;
  const locationResults = document.querySelector('#results-location');
  locationResults.textContent = locationValue;

  const likingAssignmentValue = form.didLikeAssignment.checked;
  const likingAssignmentResults = document.querySelector(
    '#results-did-like-assignment'
  );
  if (likingAssignmentValue) {
    likingAssignmentResults.textContent = 'Yes';
  } else {
    likingAssignmentResults.textContent = 'No';
  }
};

const submitButton = document.querySelector('#new-user-form');
submitButton.addEventListener('submit', handleSubmit);
