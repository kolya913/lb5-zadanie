# Geometry Calculator

This module provides functions to calculate the areas of various geometric shapes.


## Installation

To install the package, use npm:

```bash
npm install lr5-kolya913
```

## Functions

### `calculateTriangleArea(x1, y1, x2, y2, x3, y3)`

Calculates the area of a triangle given the coordinates of its three vertices.

**Parameters**:
- `x1`, `y1`: Coordinates of the first point.
- `x2`, `y2`: Coordinates of the second point.
- `x3`, `y3`: Coordinates of the third point.

**Returns**:  
The area of the triangle.

**Possible errors**:  
Throws an error if the three points are collinear (lie on the same line).

**Example usage**:
```javascript
const area = calculateTriangleArea(0, 0, 3, 0, 0, 4);
console.log(area); // Output: 6
```
### `calculateCircleArea(radius)`

Calculates the area of a circle given its radius.

**Parameters**:
- `radius`: The radius of the circle.

**Returns**:  
The area of the circle.

**Possible errors**:  
Throws an error if the radius is negative.

**Example usage**:
```javascript
const area = calculateCircleArea(5);
console.log(area); // Output: 78.53981633974483
```
### `calculateRectangleArea(width, height)`

Calculates the area of a rectangle given its width and height.

**Parameters**:
- `width`: The width of the rectangle.
- `height`: The height of the rectangle.

**Returns**:  
The area of the rectangle.

**Possible errors**:
- Throws an error if either `width` or `height` is negative.
- Throws an error if either `width` or `height` is zero.

**Example usage**:
```javascript
const area = calculateRectangleArea(4, 5);
console.log(area); // Output: 20
```