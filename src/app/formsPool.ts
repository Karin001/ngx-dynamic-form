import { FieldConfig } from './dynamic-form/interface/fieldConfig';
import { Validators } from '@angular/forms';
export const formsPool: { [formType: string]: FieldConfig[] } = {
    food: [
        {
            type: 'input',
            label: '喜欢的食物',
            name: 'foodName',
            placeholder: '汉堡',
            disabled: false,
            validations: [Validators.required, Validators.minLength(2)]
        },
        {
            type: 'select',
            label: '喜欢的食物种类',
            name: 'foodType',
            options: ['西式快餐', '川菜', '粤菜', '烧烤麻辣烫'],
            disabled: false,
            placeholder: '请选择',
            validations: [Validators.required]
        },
        {
            label: 'Submit',
            name: 'submit',
            type: 'button',
            disabled: false,
        }
    ],
    music: [
        {
            type: 'input',
            label: '喜欢的音乐人',
            name: 'singerName',
            placeholder: '泽野弘之',
            disabled: false,
            validations: [Validators.required, Validators.minLength(2)]
        },
        {
            type: 'input',
            label: '喜欢的歌',
            name: 'song',
            placeholder: '等你下课',
            disabled: false,
            validations: [Validators.required]
        },
        {
            type: 'checkbox',
            label: '感兴趣的音乐种类',
            name: 'musicTypeLike',
            options: ['说唱', '爵士', '嘻哈', '古典', '蓝调'],
            disabled: false,
            placeholder: '选择你感兴趣的种类',
            validations: [Validators.required]
        },
        {
            type: 'checkbox',
            label: '讨厌的音乐种类',
            name: 'musicTypeHate',
            options: ['说唱', '爵士', '嘻哈', '古典', '蓝调'],
            disabled: false,
            placeholder: '选择你感兴趣的种类',
            validations: [Validators.required]
        },
        {
            label: 'Submit',
            name: 'submit',
            type: 'button',
            disabled: false,
        }
    ],
    movie: [
        {
            type: 'input',
            label: '感兴趣的电影',
            name: 'movieName',
            placeholder: '请输入',
            disabled: false,
            validations: [Validators.required]
        },
        {
            label: '喜欢的等级',
            name: 'like',
            options: ['喜欢', '非常喜欢', '特别喜欢', '超级喜欢'],
            type: 'radio',
            disabled: false,
        },
        {
            label: 'Submit',
            name: 'submit',
            type: 'button',
            disabled: false,
        }
    ]
};
