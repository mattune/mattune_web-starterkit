
export const utils = {
  eq: (selector, index)=> {
    var nodeList = document.querySelectorAll(selector),
        length = nodeList.length;

    if (0 <= index) {
      return nodeList[index];
    }

    return null;
  }
};