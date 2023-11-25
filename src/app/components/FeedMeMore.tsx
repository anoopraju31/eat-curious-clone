'use client'

import { motion } from 'framer-motion'
import { chomp } from '@/utils/animations'

const FeedMeMore = () => {
	return (
		<motion.svg
			variants={chomp}
			whileInView='animate'
			viewport={{ once: true }}
			width='1224'
			height='314'
			viewBox='0 0 1224 314'
			fill='none'
			className='w-full h-auto flex-shrink-0 origin-bottom fill-[var(--black)]'
			xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_816_18455)'>
				<path d='M44.214 230.312C44.2777 232.47 44.3095 233.549 44.3731 235.707C57.5076 231.36 70.4932 227.069 81.7341 222.929C82.1778 239.219 82.8793 255.501 83.5741 271.782C72.5307 273.108 59.4866 274.799 46.481 276.599C47.2829 288.323 48.0933 300.114 48.912 311.969C32.6081 312.095 16.3042 312.229 0.00195312 312.366C0.286577 292.976 0.435585 273.572 0.435585 254.192C0.435585 234.913 0.469071 215.604 0.00195312 196.316C26.0283 178.069 52.4916 160.867 79.7367 144.505C79.8456 152.208 80.1134 163.675 80.5286 173.466C80.9171 182.594 81.56 192.518 81.8446 199.199C68.6933 204.098 54.9845 209.526 43.7436 214.321C43.9328 220.717 44.0265 223.913 44.2157 230.309L44.214 230.312Z' />
				<path d='M174.597 95.1318C174.719 101.852 175.307 113.073 175.787 122.278C176.315 132.351 176.931 144.147 177.532 151.265C162.229 156.14 146.59 161.529 133.939 166.328C134.403 175.489 134.636 180.072 135.099 189.233C149.595 184.611 164.841 179.76 177.428 175.55C178.026 191.839 178.896 208.116 179.753 224.393C167.49 226.092 152.112 228.836 137.263 231.924L138.463 255.609C151.577 253.681 168.122 251.367 182.652 249.142C183.058 256.914 183.477 269.313 184.05 280.249C184.592 290.61 185.453 302.689 185.888 311.037C155.622 311.22 125.357 311.416 95.0897 311.628C94.3262 282.972 92.9969 254.327 91.7228 225.694C90.452 197.133 89.2398 168.555 87.4668 140.014C115.73 123.639 144.894 108.713 174.597 95.1335V95.1318Z' />
				<path d='M274.793 55.4194C274.93 63.3168 275.555 76.5786 276.065 87.4563C276.626 99.3585 277.281 113.3 277.912 121.742C262.243 125.341 246.198 129.41 233.201 133.18C233.767 144.401 234.052 150.011 234.617 161.231C249.445 157.599 265.015 153.728 277.86 150.271C278.51 169.528 279.437 188.776 280.353 208.019C267.925 209.076 252.331 211.082 237.259 213.506C237.845 225.109 238.138 230.91 238.724 242.511C251.978 240.996 268.689 239.199 283.353 237.383C283.785 246.564 284.244 261.206 284.852 274.129C285.428 286.371 286.329 300.649 286.792 310.511C256.512 310.65 226.233 310.805 195.952 310.974C194.573 274.209 192.57 237.465 190.652 200.728C188.734 164.045 186.941 127.34 184.443 90.6876C214.203 77.8125 244.186 66.1061 274.793 55.416V55.4194Z' />
				<path d='M344.115 34.6255C408.401 15.2762 404.661 118.782 405.896 154.861C407.316 196.29 422.264 310.893 354.08 310.243C335.005 310.314 315.932 310.389 296.857 310.469C295.417 267.461 293.587 224.446 291.612 181.483C289.628 138.347 287.521 95.1717 284.953 52.0428C304.498 45.6589 324.229 39.8509 344.115 34.6255ZM359.119 166.698C358.579 152.944 361.212 96.7924 341.466 98.5269C339.375 98.711 336.808 99.508 334.727 100.317C335.259 124.93 336.277 149.533 337.282 174.123C338.183 196.141 339.043 218.176 340.219 240.189C342.306 240.398 344.779 240.363 346.911 240.062C367.62 237.139 359.655 180.353 359.118 166.698H359.119Z' />
				<path d='M547.997 309.813C548.277 275.209 548.331 240.59 548.064 206.01C547.878 181.801 548.505 157.561 548.96 133.339C548.488 133.192 548.252 133.118 547.778 132.973C545.92 155.881 544.07 178.79 541.727 201.656C537.659 237.707 533.644 273.766 529.679 309.829C522.169 309.838 518.413 309.843 510.904 309.853C505.731 273.9 500.477 237.96 495.139 202.031C492.221 180.006 489.633 157.936 487.071 135.867C486.604 136.062 486.371 136.16 485.904 136.356C486.884 160.357 488.365 184.498 488.975 208.351C489.834 241.977 491.024 276.041 492.127 309.883C476.374 309.908 468.497 309.925 452.746 309.958C451.999 260.36 450.892 210.75 449.623 161.184C448.361 111.9 446.928 62.5819 445.355 13.2867C465.678 10.037 486.093 7.38331 506.57 5.32732C510.397 37.5886 513.936 69.8799 517.867 102.129C519.585 121.059 520.864 140.031 522.239 158.987C522.708 158.965 522.942 158.955 523.411 158.935C524.39 139.83 525.209 120.71 526.383 101.615C529.36 68.7163 532.566 35.8222 534.893 2.86951C553.762 1.66572 572.517 0.796784 591.416 0.250977C591.27 51.7025 591.285 103.166 591.446 154.606C591.608 206.32 591.664 258.066 592.65 309.784C574.789 309.789 565.858 309.794 547.997 309.809V309.813Z' />
				<path d='M699.191 3.65824C698.823 13.024 698.605 28.9496 698.428 42.0088C698.233 56.2985 698.004 73.0411 698.103 83.2591C681.978 81.8443 665.356 80.7176 651.81 80.3258C651.717 94.8265 651.671 102.078 651.578 116.58C666.935 116.957 682.996 117.19 696.223 117.071C695.611 140.204 695.362 163.35 695.056 186.489C682.458 185.238 666.576 184.396 651.15 184.143C651.054 199.138 651.008 206.635 650.912 221.63C664.387 221.787 681.34 222.088 696.204 222.057C696.053 233.077 695.581 250.628 695.37 266.145C695.169 280.845 695.166 297.992 695.004 309.829C664.701 309.799 634.399 309.783 604.097 309.783C604.565 258.165 604.428 206.543 604.364 154.927C604.301 103.315 604.338 51.6943 603.691 0.0820312C635.638 0.147327 667.335 1.33437 699.191 3.65489V3.65824Z' />
				<path d='M834.204 310.126C835.932 278.201 837.488 246.265 838.705 214.333C839.555 192.056 841.191 169.792 842.684 147.539C842.224 147.326 841.993 147.218 841.533 147.005C838.755 167.916 835.89 188.821 832.6 209.657C826.923 243.111 821.374 276.586 815.888 310.072C808.379 310.051 804.625 310.041 797.116 310.022C793.527 275.052 789.912 240.085 786.269 205.122C784.355 183.314 782.79 161.477 781.263 139.64C780.791 139.752 780.554 139.809 780.081 139.921C779.957 163.493 780.277 187.175 779.843 210.637C779.232 243.599 778.75 276.86 778.343 309.979C762.591 309.942 754.714 309.927 738.961 309.898C740.531 259.552 741.745 209.175 742.793 158.835C743.836 108.753 744.71 58.6293 745.444 8.52051C765.875 11.124 786.229 14.3268 806.472 18.1224C808.782 49.6838 810.847 81.2586 813.318 112.81C814.174 130.966 814.605 149.143 815.131 167.309C815.597 167.355 815.829 167.381 816.295 167.427C818.103 149.615 819.75 131.779 821.756 113.987C826.106 83.934 830.705 53.8995 834.434 23.7596C852.984 27.9452 871.326 32.4255 889.718 37.2625C887.568 82.6147 885.569 127.985 883.717 173.338C881.855 218.961 879.91 264.615 878.843 310.278C860.989 310.213 852.062 310.183 834.204 310.128V310.126Z' />
				<path d='M945.741 313.915C881.858 313.813 891.313 207.23 892.994 168.487C894.502 133.695 895.905 32.3069 958.119 55.055C1011.95 74.7375 1014.58 142.17 1011.61 190.452C1009.08 231.694 1004.5 314.009 945.739 313.915H945.741ZM964.159 180.35C964.898 164.849 968.566 118.196 955.242 115.234C942.968 112.507 940.601 164.625 940.062 175.884C939.233 193.143 937.76 246.017 948.942 247.013C959.81 247.981 963.406 196.193 964.161 180.351L964.159 180.35Z' />
				<path d='M1098.59 235.696C1115.8 241.276 1123.48 257.106 1124.45 274.038C1125.13 286.056 1126.32 302.867 1127.3 311.616C1111.21 311.501 1103.16 311.447 1087.06 311.34C1080.88 311.3 1079.34 307.888 1078.86 297.067C1078.31 284.552 1082.46 248.946 1069.23 244.517C1067.05 243.786 1064.71 243.787 1061.99 243.354C1061.26 265.953 1060.48 288.557 1060.75 311.173C1045.05 311.076 1029.34 310.984 1013.63 310.897C1016.12 273.231 1018.23 235.52 1020.19 197.849C1022.15 160.108 1023.96 122.307 1025.39 84.5137C1046.19 93.4006 1066.7 102.962 1086.88 113.179C1117.13 128.101 1130.68 155.683 1129.46 188.42C1128.74 208.007 1124.4 236.004 1098.66 234.182C1098.63 234.787 1098.61 235.09 1098.58 235.694L1098.59 235.696ZM1085.6 182.849C1086.77 159.735 1083.21 154.262 1074.75 150.982C1073.19 150.377 1066.85 147.836 1066.49 148.094C1063.16 150.449 1064.51 186.015 1063.76 204.986C1066.22 205.874 1069.37 206.654 1072.97 207.56C1081.06 209.599 1084.53 203.863 1085.6 182.848V182.849Z' />
				<path d='M1224 196.32C1223.79 199.731 1223.79 205.778 1223.79 210.734C1223.79 216.157 1223.79 222.515 1224 226.492C1209.64 218.918 1194.72 211.395 1182.48 205.607C1182.28 212.331 1182.19 215.693 1182 222.418C1196.1 227.994 1210.74 233.889 1222.72 238.779C1222.5 244.922 1222.48 258.196 1222.47 265.221C1210.63 261.663 1195.69 257.469 1181.1 253.747C1180.9 260.7 1180.8 264.176 1180.6 271.129C1193.55 273.455 1209.81 276.477 1224 279.102C1224 283.279 1223.78 289.903 1223.77 295.791C1223.77 301.37 1224 307.884 1224 312.371C1193.75 312.12 1163.5 311.882 1133.25 311.661C1134.98 283.509 1136.16 255.319 1137.38 227.145C1138.6 198.902 1139.89 170.645 1140.62 142.379C1169.27 158.947 1197.09 177.056 1224 196.322V196.32Z' />
			</g>
			<defs>
				<clipPath id='clip0_816_18455'>
					<rect
						width='1224'
						height='313.829'
						fill='white'
						transform='translate(0 0.0849609)'
					/>
				</clipPath>
			</defs>
		</motion.svg>
	)
}

export default FeedMeMore
