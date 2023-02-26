export function galleryFloor(floor: number) {
  switch(floor) {
    case 1: 
      return "Level 1";
    case 2: 
      return "Level 2";
    case 3:
      return "Level 3";
    case 4:
      return "Level 4";
    case 5:
      return "Level 5";
    default:
      return "Lower Level";
  }
};