import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container mt-20'>
        <br />
        <br />
        <table class='ui selectable inverted violet table'>
          <thead>
            <tr>
              <th>Algorithm Category</th>
              <th class='right aligned'>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Graph</td>

              <td class='right aligned'>
                <NavLink to='/graph'>
                  <code>/graph</code>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Backtracking</td>
              <td class='right aligned'>
                <NavLink to='/backtracking'>
                  <code>/backtracking</code>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Sorting</td>
              <td class='right aligned'>
                <NavLink to='/sorting'>
                  <code>/sorting</code>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Searching</td>
              <td class='right aligned'>
                <NavLink to='/searching'>
                  <code>/searching</code>
                </NavLink>
              </td>
            </tr>
            <tr>
              <td>Dynamic Programming</td>
              <td class='right aligned'>
                <NavLink to='/dp'>
                  <code>/dp</code>
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
