import { DatePicker, Row, Col } from 'antd';
import React from "react";
import FormItem from 'antd/lib/form/FormItem';

export default class DateRange extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
          <FormItem
            help='qwe'
          >
          <DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          placeholder="Start"
        />
          </FormItem>
          </Col>
        </Row>
       
      </div>
    );
  }
}