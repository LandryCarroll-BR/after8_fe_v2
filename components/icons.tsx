import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg width="72.401" height="72.401" viewBox="0 0 72.401 72.401" {...props}>
      <defs>
        <clipPath id="a">
          <rect width="72.401" height="72.401" fill="#cc9cc8" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          d="M36.2,1.758A34.452,34.452,0,0,1,49.606,67.937,34.452,34.452,0,0,1,22.795,4.464,34.226,34.226,0,0,1,36.2,1.758M36.2,0A36.2,36.2,0,1,0,72.4,36.2,36.2,36.2,0,0,0,36.2,0"
          fill="#cc9cc8"
        />
        <path
          d="M198.24,218.582c1.113,0,2.188-.073,3.248.02a2.7,2.7,0,0,1,2.346,1.845,2.514,2.514,0,0,1-.886,3.074,3.069,3.069,0,0,1,1.066,2.886h-1.622c-.36-2.133-.528-2.284-2.463-2.114v2.149H198.24Zm1.711,4.23c.879.023,1.73.233,2.217-.665a1.316,1.316,0,0,0-.143-1.56c-.576-.69-1.325-.495-2.074-.431Z"
          transform="translate(-169.194 -186.533)"
          fill="#cc9cc8"
        />
        <path
          d="M158.633,220.5v1.044h3.022v1.7h-3v1.732h3.18v1.694h-4.719v-7.827h4.7V220.5Z"
          transform="translate(-134.091 -186.775)"
          fill="#cc9cc8"
        />
        <path
          d="M75.306,223.284v3.409H73.634v-7.8h4.883v1.649H75.355v1.214h3.007v1.533Z"
          transform="translate(-62.845 -186.818)"
          fill="#cc9cc8"
        />
        <path
          d="M27.909,226.442a5.492,5.492,0,0,0-.7,0,1.056,1.056,0,0,1-1.4-.939.7.7,0,0,0-.882-.628c-.385.044-.789-.043-1.166.028-.236.045-.436-.017-.637.431-.611,1.189-.6,1.2-2.165,1.044l3.454-7.861,3.493,7.921m-2.944-3.134-.554-1.35-.51,1.35Z"
          transform="translate(-17.891 -186.504)"
          fill="#cc9cc8"
        />
        <path
          d="M115.28,220.58h-1.7V218.9h5.06v1.662h-1.637v6.147H115.28Z"
          transform="translate(-96.942 -186.826)"
          fill="#cc9cc8"
        />
        <path
          d="M263.971,65.8a13.525,13.525,0,0,1,9.632,3.957,13,13,0,0,1-1.181,19.3,36.065,36.065,0,0,1,2.811,2.487c6.228,6.749,4.386,16.794-3.844,21.12a16.043,16.043,0,0,1-18.467-2.5,13.056,13.056,0,0,1-.6-18.379,31.769,31.769,0,0,1,2.507-2.229c.176-.154.367-.293.562-.447-6.646-5.027-6.236-14.725-.972-19.575a14.082,14.082,0,0,1,9.553-3.733m.014,20.147a7.013,7.013,0,0,0,.188-14.005l-.169,0a7,7,0,0,0-.186,14.005l.167,0m-.1,22.343a7.909,7.909,0,0,0,8.052-7.9,8,8,0,0,0-8.017-8h-.088a8,8,0,0,0-7.993,7.937,7.9,7.9,0,0,0,8.014,7.963h.032m.088-44.248v0a15.819,15.819,0,0,0-10.744,4.2A14.752,14.752,0,0,0,248.7,79.737a14.526,14.526,0,0,0,1.517,5.847,13.915,13.915,0,0,0,2.475,3.481,17.269,17.269,0,0,0-1.657,1.53,14.806,14.806,0,0,0-3.948,10.593,14.656,14.656,0,0,0,4.638,10.26,17.731,17.731,0,0,0,12.184,4.826,17.918,17.918,0,0,0,8.305-2.054,15.5,15.5,0,0,0,8.28-11.033,15.09,15.09,0,0,0-3.962-12.836,16.11,16.11,0,0,0-1.433-1.347,14.364,14.364,0,0,0,3.969-9.137,14.787,14.787,0,0,0-4.212-11.347,15.214,15.214,0,0,0-10.878-4.476m.013,20.147h-.125A5.247,5.247,0,0,1,264,73.7h.134a4.8,4.8,0,0,1,3.393,1.492,5.256,5.256,0,0,1,1.431,3.8,5.519,5.519,0,0,1-1.5,3.752,4.808,4.808,0,0,1-3.473,1.446m-.1,22.343h-.026a6.33,6.33,0,0,1-4.53-1.866,6.012,6.012,0,0,1-1.733-4.32,6.237,6.237,0,0,1,6.235-6.2h.069a6.192,6.192,0,1,1-.016,12.383"
          transform="translate(-210.872 -54.662)"
          fill="#cc9cc8"
        />
      </g>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}
