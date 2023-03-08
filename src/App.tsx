import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Overview from './pages/Overview';
import { Reports, ReportsOne,ReportsTwo,ReportsThree } from './pages/Reports';
import { Message, MessageOne } from './pages/Message';

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Sidebar/>}/>
      <Route path="/overview" element={<Overview/>}/>
      <Route path="/reports" element={<Reports/>}/>
      <Route path="/reports/reports1" element={<ReportsOne/>}/>
      <Route path="/reports/reports2" element={<ReportsTwo/>}/>
      <Route path="/reports/reports3" element={<ReportsThree/>}/>
      <Route path="/messages/message1" element={<Message/>}/>
      <Route path="/messages/message2" element={<MessageOne/>}/>
      </Routes>
    </Router>
  )
}

export default App
