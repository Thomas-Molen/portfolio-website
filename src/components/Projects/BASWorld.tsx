import Technology from "../Technology";
import Underline from "../Underline"

function BASWorld() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-end">
                <h3>BAS World</h3>
            </div>
            <hr className="my-0" />
            <div className="my-1 mb-2 row row-cols-auto gx-1">
                <Technology image="laravel.png" alt="Laravel" />
                <Technology image="mysql.png" alt="MySQL" />
                <span className="note">
                    *Technology info limited due to Non-Disclosure Agreements.
                </span>
            </div>
            <p className="project-intro">
                Developed a fully integrated internal ticketing system within 5 months.
            </p>
            <p>I had the privilege of leading a collaborative effort to create a comprehensive internal support ticketing system for BAS Trucks, helping the company's transformation into the larger entity known as BAS World.</p>
            <p>The development of this support ticketing system was a remarkable journey undertaken with a team of dedicated developers. Together, we created a solution that streamlined internal support processes and increased productivity across the organization. This project allowed me to learn a lot as a fresh developer in the enterprise business environment.</p>
            <p>Notably, the support ticketing system wasn't just limited to our team. It was presented as a challenge to several development teams, with my team being&nbsp;
                <Underline initialWidth="0">
                    <a href="https://www.linkedin.com/posts/basworldplatform_werkenbijbas-fontysxbas-fontysict-activity-6811285657755947008-CERL?utm_source=share&utm_medium=member_desktop" target="_blank">
                        chosen as the favored solution<i className="bi bi-box-arrow-up-right ms-1"></i>
                    </a>
                </Underline>.
            </p>
        </>
    );
}

export default BASWorld;