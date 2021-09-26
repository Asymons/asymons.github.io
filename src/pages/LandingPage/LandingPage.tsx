import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {createBranches, GlitchText} from "../../util/canvas";
import { debounce } from "lodash";
import { Transition, animated, config } from 'react-spring';

const MainWrapper = styled.div`
    width: 100%;
    background-color: black;
    position: relative;
`;

type OverlayProps = {
    width: number;
    top: number;
}

const Overlay = styled.div<OverlayProps>`
    position: absolute;
    top: ${(({top}) => top)}px;
    width: ${(({width}) => width)}px;
    background-color: rgba(0,0,0,0.8);
    left: calc(50% - ${(({width}) => width/2)}px);
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.8);
`;

const Canvas = styled.canvas`
    margin: auto;
`;

const LandingPage = () => {
    const canvasEl = useRef<HTMLCanvasElement | null>(null);
    const textCanvasEl = useRef<HTMLCanvasElement | null>(null);
    const currentInterval = useRef<any>(null);
    const [redrawInterval, setRedrawInterval] = useState<NodeJS.Timeout | null>(null);
    const textCanvasWidth = 350;
    const textCanvasHeight = 90;
    const canvasHeight = 800;

    const populateCanvas = (canvas: HTMLCanvasElement) => {
        const branches = createBranches(500, canvas);
        branches.forEach((branch) => {
            if(branch.isVisible()){
                branch.moveNoise();
                branch.draw();
                branch.walls();
            }
        });
    };

    const populateCanvasWithInterval = (canvas: HTMLCanvasElement) => {
        if(currentInterval.current){
            clearInterval(currentInterval.current);
        }
        const interval = setInterval(() => {
            populateCanvas(canvas);
        }, 7500);
        currentInterval.current = interval;
    };

    const populateTextCanvas = (canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext("2d");
        if(ctx){
            const glitchText = new GlitchText(["asymons", "Developer", "Fullstack", "Software", "Engineer",], textCanvasWidth / 2, 50, canvas, 1);
            glitchText.drawText();
            setInterval(() => {
                glitchText.getShadowsImg();
                glitchText.glitch();
            }, 2000);
        }
    };

    useEffect(() => {
        if(canvasEl.current && textCanvasEl.current){
            window.addEventListener('resize', debounce(function() {
                if(canvasEl.current){
                    const ctx = canvasEl.current.getContext('2d');
                    if(ctx){
                        ctx.clearRect(0,0,canvasEl.current.width, canvasEl.current.height);
                    }
                    canvasEl.current.width = document.body.clientWidth;
                    canvasEl.current.height = canvasHeight;
                    populateCanvasWithInterval(canvasEl.current);
                    populateCanvas(canvasEl.current);
                }
            }, 200));
            populateCanvasWithInterval(canvasEl.current);
            populateCanvas(canvasEl.current);
            document.fonts.onloadingdone = function () {
                if(textCanvasEl.current){
                    populateTextCanvas(textCanvasEl.current);
                }
            };
        }

        return () => {
            if(redrawInterval){
                clearInterval(redrawInterval)
            }
        };
    }, [canvasEl.current, textCanvasEl.current]);

    return (
        <MainWrapper style={{height: canvasHeight}}>
            <Canvas id="main-canvas" ref={canvasEl} width={document.body.clientWidth} height={canvasHeight} onClick={() => {
                if(canvasEl.current){
                    populateCanvas(canvasEl.current);
                    populateCanvasWithInterval(canvasEl.current);
                }
            }} />
            <Transition
                items={true}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                delay={200}
                config={config.molasses}
            >
                {({ opacity }, item) => (
                    <animated.div
                        style={{
                            opacity: opacity.to({range: [0.0, 1.0], output: [0,1]}),
                        }}>
                        <Overlay top={canvasHeight / 2 - textCanvasHeight / 2} width={textCanvasWidth}>
                            <Canvas id="text-canvas" ref={textCanvasEl} width={textCanvasWidth} height={textCanvasHeight} />
                        </Overlay>
                    </animated.div>
                )}
            </Transition>
        </MainWrapper>
    )
};

export default LandingPage;
