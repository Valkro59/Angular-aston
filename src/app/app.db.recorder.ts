import { Recorder } from "./app.recorder";

export class DB implements Recorder {
    save(text: string) {
        console.log('DB save: ' + text);
    }
}