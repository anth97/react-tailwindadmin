import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import SidebarComponent from './components/SidebarComponent'

function App() {


  return (

    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <aside
        className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-person-theme-purple"
      >
        <div className="sidebar-header flex items-center justify-center py-4 ">
          <div className="inline-flex">
            <a href="#" className="inline-flex flex-row items-center font-mono">
              <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">ADMIN</span>
            </a>
          </div>
        </div>
        <SidebarComponent></SidebarComponent>
      </aside>
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <HeaderComponent></HeaderComponent>

        <div className="main-content flex flex-col flex-grow p-4 bg-person-theme-gray">
        </div>

        <FooterComponent></FooterComponent>
      </main>
    </div>
  )
}

export default App
