export const formatTime = sec => {
  if (sec <= 9) return `00:0${sec}`
  if (sec > 9 && sec < 60) return `00:${sec}`
  if (sec >= 60) return `0${Math.floor(sec / 60)}:${sec % 60 < 9 ? '0' + (sec % 60) : sec % 60}`
}
