import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';

function NestedMapMethod() {
    const countryWithStates = [
        {
            country: 'Afghanistan',
            cities: ['Kabul', 'Wardak', 'Ghazni', 'Logar']
        },
        {
            country: 'India',
            cities: ['Dehli', 'kdkdkd', 'kkdkee', 'lldlld']
        },
        {
            country: 'USA',
            cities: ['New York', 'Chicogo', 'Los Angles', 'Taxax']
        },
        {
            country: 'Canada',
            cities: ['Turanto', 'kdkdkdkw', 'keiieiekd', 'ldlkdsjlkd']
        },
       
    ];

  return (
    <div>
      <h1>Nested Map Function in React !</h1>
        <ul>
            {countryWithStates.map((countryObj, index) => (
                <li key={index}>
                    <b>{ countryObj.country }</b>
                    <ul>
                        {countryObj.cities.map((city, index) => (
                            <li key={index}>{ city }</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>

        <h1>
            Example 2
        </h1>
        <Container>
            <Row>
                {/* md={6} */}
                <Col md={ {span: 6, offset: 6 } }>
                    <Table className="table">
                        <thead>
                            <tr>
                                <th>Country Name</th>
                                <th>Cities</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                countryWithStates.map((countryObject, index) => (
                                    <tr key={index}>
                                        <td>{ countryObject.country }</td>
                                        <td>
                                            <ul className='list-unstyled'>
                                                {
                                                    countryObject.cities.map((cityName, cityIndex) => (
                                                        <li key={cityIndex}> {cityName}</li>
                                                    ))
                                                }
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            }
                          
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default NestedMapMethod
