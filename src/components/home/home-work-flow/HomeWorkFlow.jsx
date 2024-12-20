import { useEffect } from 'react';
import './home-work-flow.css';

function HomeWorkFlow() {
  useEffect(() => {
    const cards = document.querySelectorAll('.content');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('work-flow-content-in-view');
            // entry.target.classList.remove('out-of-view');
          } else {
            entry.target.classList.remove('work-flow-content-in-view');
            {
              /* Reset class when out of view */
            }
            // entry.target.classList.add('out-of-view');
          }
        });
      },
      {
        threshold: 1, // Trigger when 70% of the card is in view
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    // Cleanup observer on component unmount
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="home-work-flow-container">
      <h1>Our Work Flow Process</h1>
      <p>
        Incisive Solutions follows a systematic and highly organized process of
        carrying out the required services, so as to ensure a hassle-free,
        quality-oriented, and reliable output. We give a greater priority to
        manage the process in an efficient way.
      </p>

      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>New Lead</h2>
            <p>
              A potential client&apos;s enquiry - the project&apos;s inception.
            </p>
            <div className="left-icon" style={{ backgroundImage: 'url(/assets/new-lead.png)' }}></div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Sample Processing</h2>
            <p>Determines how the project&apos;s final output will be.</p>
            <div className="right-icon" style={{ backgroundImage: 'url(/assets/sample-processing.png)' }}></div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Rate Fixing</h2>
            <p>Budget-friendly pricing for the project.</p>
            <div className="left-icon" style={{ backgroundImage: 'url(/assets/rate-fixing.png)' }}></div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Quality Check</h2>
            <p>Rigorous quality checks while on the project.</p>
            <div className="right-icon" style={{ backgroundImage: 'url(/assets/quality-check.png)' }}></div>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>Auditing</h2>
            <p>Final quality inspection that ensures project delivery.</p>
            <div className="left-icon" style={{ backgroundImage: 'url(/assets/auditing.png)' }}></div>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Dispatch</h2>
            <p>Time-bound project delivery, always.</p>
            <div className="right-icon" style={{ backgroundImage: 'url(/assets/dispatch.png)' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWorkFlow;
