# JS Sandbox
## Coding Session December 27th 2018 (tutor Madsen Servius)

## Exercises

**Build a table**
An HTML table is built with the following tag structure:

    ```<table>
      <tr>
        <th>name</th>
        <th>height</th>
        <th>place</th>
      </tr>
      <tr>
        <td>Kilimanjaro</td>
        <td>5895</td>
        <td>Tanzania</td>
      </tr>
    </table>
  ```

For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags,
we can put cell elements: either heading cells (<th>) or regular cells (<td>).
Given a data set of mountains, an array of objects with name, height, and
place properties, generate the DOM structure for a table that enumerates the
objects. It should have one column per key and one row per object, plus a
header row with <th> elements at the top, listing the column names.
Write this so that the columns are automatically derived from the objects,

**Elements By Tag Name**

The document.getElementsByTagName method returns all child elements with a
given tag name. Implement your own version of this as a function that takes a
node and a string (the tag name) as arguments and returns an array containing
all descendant element nodes with the given tag name.
To find the tag name of an element, use its nodeName property. But note
that this will return the tag name in all uppercase. Use the toLowerCase or
toUpperCase string methods to compensate for this.
