const sidebarProps = {
    initialPose: 'closed',
    open: {
      x: "0%",
      delayChildren: 300,
      staggerChildren: 50
    },
    closed: {
      delay: 500,
      staggerChildren: 20,
      x: "-100%"
    }
  };
  
  const itemProps = {
    initialPose: 'closed',
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };
  
  const sidebar = document.querySelector('.sidepanel')
  const items = Array.from(sidebar.querySelectorAll('.item'))
  
  const sidebarPoser = pose(sidebar, sidebarProps)
  items.forEach(item => sidebarPoser.addChild(item, itemProps))
  
  sidebarPoser.set('open')
  
  