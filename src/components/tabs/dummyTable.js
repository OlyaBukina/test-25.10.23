import { Table } from './Tabs.styled';

const DummyTable = () => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>30</td>
        <td>New York</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>25</td>
        <td>Los Angeles</td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>35</td>
        <td>Chicago</td>
      </tr>
    </tbody>
  </Table>
);

export default DummyTable;
