import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { RootLayout } from "../partials/layout";
import { ThreeD } from "../pages/3d";
import { MotionValues } from "../pages/motion-values";
import { Universal } from "../pages/universal";
import { Hooks } from "../pages/hooks";
import ThreeDPractise from "../practice/threeD-practise";
import { ComponentsPractise } from "../practice/components-practise";
import { MotionValuesPractise } from "../practice/motion-values-practise";
import { UniversalPractise } from "../practice/universal-practise";
import { HooksPractise } from "../practice/hooks-practise";
import { AnimationLayout } from "../pages/animation";
import { Gesture } from "../pages/animation/gesture";
import { Layout } from "../pages/animation/layout";
import { Overview } from "../pages/animation/overview";
import { Scroll } from "../pages/animation/scroll";
import { Transition } from "../pages/animation/transition";
import { AnimationPractise } from "../practice/animation-practise";
import { ComponentsLayout } from "../pages/components";
import { Reorder } from "../pages/components/reorder";
import { MotionConfig } from "../pages/components/motion-config";
import { LazyMotion } from "../pages/components/lazy-motion";
import { AnimatePresence } from "../pages/components/animate-presence";
import { LayoutGroup } from "../pages/components/layout-group";
import { Motion } from "../pages/components/motion";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "three",
				element: <ThreeD />,
			},
			{
				path: "three-practice",
				element: <ThreeDPractise />,
			},
			{
				path: "animation",
				element: <AnimationLayout />,
				children: [
					{
						path: "",
						element: <Overview />,
					},
					{
						path: "gesture",
						element: <Gesture />,
					},
					{
						path: "layout",
						element: <Layout />,
					},
					{
						path: "scroll",
						element: <Scroll />,
					},
					{
						path: "transition",
						element: <Transition />,
					},
					{
						path: "practice",
						element: <AnimationPractise />,
					},
				],
			},
			{
				path: "components",
				element: <ComponentsLayout />,
				children: [
					{
						path: "",
						element: <Motion />,
					},
					{
						path: "animate-presence",
						element: <AnimatePresence />,
					},
					{
						path: "layout-group",
						element: <LayoutGroup />,
					},
					{
						path: "lazy-motion",
						element: <LazyMotion />,
					},
					{
						path: "motion-config",
						element: <MotionConfig />,
					},
					{
						path: "reorder",
						element: <Reorder />,
					},
				],
			},
			{
				path: "components-practise",
				element: <ComponentsPractise />,
			},
			{
				path: "motion-values",
				element: <MotionValues />,
			},
			{
				path: "motion-values-practise",
				element: <MotionValuesPractise />,
			},

			{
				path: "universal",
				element: <Universal />,
			},
			{
				path: "universal-practise",
				element: <UniversalPractise />,
			},
			{
				path: "hooks",
				element: <Hooks />,
			},
			{
				path: "hooks-practise",
				element: <HooksPractise />,
			},
		],
	},
]);
