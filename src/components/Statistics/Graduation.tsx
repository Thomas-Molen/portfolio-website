import "./ProgressBar.css"

interface props {
    start: Date;
    end: Date;
    color: string; // Color of the progress bar
}
function Graduation({ start, end, color }: props) {
    // Calculate the total milisecond range of start and end
    const range = end.getTime() - start.getTime();
    // Calculate the current progress in miliseconds
    // Get the currentDate and reset the time section as to avoid possible server vs client hydration inconsistencies
    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)
    const progress = currentDate.getTime() - start.getTime();
    // Convert current progress to %
    const graduationPercentage = ((progress / range) * 100) + "%";

    // Calculate days left
    // 1 day = 8.64e+7 ms
    const daysLeft = Math.round((range - progress) / 8.64e7);

    // styling of the progressbar representing the daysLeft calculated
    const progressBarStyle = {"--progressColor": color, "--progressPercentage": graduationPercentage} as React.CSSProperties;

    return (
        <div className="d-flex align-items-center">
            <b className="me-2">{daysLeft < 0 ? 0 : daysLeft}</b>
            <div className="progress-bar" style={progressBarStyle}>
                <div className="progress"></div>
            </div>
        </div>)
}

export default Graduation;