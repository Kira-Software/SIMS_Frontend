import React, { useEffect } from "react";
import {Typography} from "@material-ui/core"

const Gradingsystem = () => {
  return (
    <div style={{marginLeft: 50}}>
      <Typography variant="h6" color="primary" style={{ margin: 50 }}>
        Grading system according to university legislation
      </Typography>

      <table className="table table-bordered table-responsive-md table-striped text-center">
        <thead>
          <tr>
            <td>Mark Range</td>
            <td>Grade Value</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mark {">="} 90</td>
            <td>A+</td>
          </tr>
          <tr>
            <td>
              85 {"<="} Mark {"<"}90
            </td>
            <td>A</td>
          </tr>
          <tr>
            <td>
              80 {"<="} Mark {"<"}85
            </td>
            <td>A-</td>
          </tr>
          <tr>
            <td>
              75 {"<="} Mark {"<"}80
            </td>
            <td>B+</td>
          </tr>
          <tr>
            <td>
              70 {"<="} Mark {"<"}75
            </td>
            <td>B</td>
          </tr>
          <tr>
            <td>
              65 {"<="} Mark {"<"}70
            </td>
            <td>B-</td>
          </tr>
          <tr>
            <td>
              60 {"<="} Mark {"<"}65
            </td>
            <td>C+</td>
          </tr>
          <tr>
            <td>
              50 {"<="} Mark {"<"}60
            </td>
            <td>C</td>
          </tr>
          <tr>
            <td>
              45 {"<="} Mark {"<"}50
            </td>
            <td>C-</td>
          </tr>
          <tr>
            <td>
              40 {"<="} Mark {"<"}45
            </td>
            <td>D</td>
          </tr>
          <tr>
            <td> Mark {"<"}40</td>
            <td>F</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Gradingsystem;
