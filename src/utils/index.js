import moment from "moment";

export function debounce(callback, wait, context = this) {
  let timeout = null;
  let callbackArgs = null;

  const later = () => callback.apply(context, callbackArgs);

  return function() {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function mergeProps(props1, props2) {
  return { ...props1, ...props2 };
}

export function firstTwoLetters(firstName, lastName) {
  firstName = firstName && firstName.trim();
  lastName = lastName && lastName.trim();
  let returnValue;

  if (firstName && lastName) {
    returnValue = firstName[0] + lastName[0];
  } else {
    const name = firstName || lastName;
    returnValue = name[0] + name[1];
  }

  return returnValue.toUpperCase();
}

export function timeAgo(date) {
  return moment(date).calendar(null, {
    sameDay: "Today",
    lastDay: "Yesterday",
    lastWeek: "Last ddd",
    sameElse: "MMM Do, 'YY"
  });
}

export function dateAndTime(date) {
  return timeAgo(date) + " | " + moment(date).format("hh:MM A");
}

export function naira(amount) {
  return "N" + amount.toLocaleString("en-US", { minimumFractionDigits: 0 });
}
