import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Layout,
  Breadcrumb,
  DatePicker,
  Switch,
  TreeSelect,
  Button
} from 'antd'

const treeData = [
  {
    title: 'TEST001',
    value: '1',
    key: '1'
  },
  {
    title: 'TEST002',
    value: '2',
    key: '2'
  },
  {
    title: 'TEST003',
    value: '3',
    key: '3'
  },
  {
    title: 'TEST004',
    value: '4',
    key: '4'
  },
  {
    title: 'TEST005',
    value: '5',
    key: '5'
  }
]

const Wrapper = styled.div`
  background-color: #fff;
  padding: 24px;
  min-height: 280px;

  & > * {
    margin-right: 30px;
  }
`

const App = () => {
  const [date, setDate] = useState([])
  const [treeSelect, setTreeSelect] = useState([])

  const toggleSwitch = checked => {
    setTreeSelect(checked ? treeData.map(data => data.value) : [])
  }

  return (
    <Layout>
      <Layout.Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>History Transaction</Breadcrumb.Item>
        </Breadcrumb>
        <Wrapper>
          <DatePicker.RangePicker
            value={date}
            onChange={dateMoment => setDate(dateMoment)}
          />
          <Switch
            checked={treeSelect.length === treeData.length}
            onChange={toggleSwitch}
          />
          <TreeSelect
            treeData={treeData}
            treeCheckable={true}
            searchPlaceholder="Please select portfolio"
            style={{ width: 300 }}
            value={treeSelect}
            onChange={value => setTreeSelect(value)}
          />
          <Button type="primary" disabled={!date.length || !treeSelect.length}>
            Submit
          </Button>
        </Wrapper>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        Sample Ant Design ©2019 Created by Punn
      </Layout.Footer>
    </Layout>
  )
}

export default App
