import '../App.css';
import React ,{useState}from 'react'
import Box from './Box';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    const tabs=[
      {title:'Tab 1', content:""},
      {title:'Tab 2',content:""},
      {title:'Tab 3',content:<Box/>}
    ];
    return (
      <div className="Bu">
        <table border={'1px'} > 
          <thead>
            <tr>
            {tabs.map((tab,i)=>
            <th style={{cursor:'pointer'}}
            key={i}
            onClick={()=>setActiveTab(i)}
            className={activeTab === i ? 'active' : ''}
            >
            {tab.title}
            </th>
            )}
            </tr>
          </thead>
          <tbody>
            <div>{tabs[activeTab].title} {tabs[activeTab].content}</div>
          </tbody>
        </table>
      </div>
  )
}

export default Tabs