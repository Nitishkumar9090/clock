setInterval(() => {
    d = new Date();
    h_time = d.getHours();
    m_time = d.getMinutes();
    s_time = d.getSeconds();

     // let taking forumals for h,m,s....by harry sir...
     h_rotation = 30*h_time + m_time/2
     m_rotation =6*m_time;
     s_rotation =6*s_time

     hour.style.transform = `rotate(${h_rotation}deg)`
     minute.style.transform = `rotate(${m_rotation}deg)`
     second.style.transform = `rotate(${s_rotation}deg)`

}, 1000);