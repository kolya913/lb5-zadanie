export function calculateTriangleArea(x1, y1, x2, y2, x3, y3) {
  const isCollinear = (x2 - x1) * (y3 - y1) === (x3 - x1) * (y2 - y1);
  if (isCollinear) {
      throw new Error("The three points lie on the same line, so the area of the triangle is zero.");
  }
  return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
}

export function calculateCircleArea(radius) {
  if (radius < 0) {
      throw new Error("The radius cannot be negative.");
  }
  return Math.PI * Math.pow(radius, 2);
}

export function calculateRectangleArea(width, height) {
  if (width < 0 || height < 0) {
      throw new Error("Width and height cannot be negative.");
  }
  if (width === 0 || height === 0) {
      throw new Error("Width and height cannot be zero.");
  }
  return width * height;
}

