import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.jpg"
              width={200}
              height={150}
              alt="reactjs"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/2345" className="wd-dashboard-course-link">
            <Image
              src="/images/nodejs.jpg"
              width={200}
              height={150}
              alt="nodejs"
            />
            <div>
              <h5> CS2345 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend Development with Node
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/3456" className="wd-dashboard-course-link">
            <Image
              src="/images/python.jpg"
              width={200}
              height={150}
              alt="python"
            />
            <div>
              <h5> CS3456 Python Programming </h5>
              <p className="wd-dashboard-course-title">
                Data Science and Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/4567" className="wd-dashboard-course-link">
            <Image
              src="/images/database.jpg"
              width={200}
              height={150}
              alt="database"
            />
            <div>
              <h5> CS4567 Database Systems </h5>
              <p className="wd-dashboard-course-title">
                SQL and NoSQL Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/5678" className="wd-dashboard-course-link">
            <Image
              src="/images/algorithm.jpg"
              width={200}
              height={150}
              alt="algorithms"
            />
            <div>
              <h5> CS5678 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Data Structures and Algorithm Design
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/6789" className="wd-dashboard-course-link">
            <Image
              src="/images/cloud.jpg"
              width={200}
              height={150}
              alt="cloud"
            />
            <div>
              <h5> CS6789 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                AWS, Azure, and Cloud Architecture
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/courses/7890" className="wd-dashboard-course-link">
            <Image
              src="/images/cybersecurity.jpg"
              width={200}
              height={150}
              alt="cybersecurity"
            />
            <div>
              <h5> CS7890 Cybersecurity </h5>
              <p className="wd-dashboard-course-title">
                Network Security and Ethical Hacking
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
