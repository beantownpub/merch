import styled from 'styled-components'

import { config } from '../../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledItem = styled.div`
    background: #fafafa;
    border: 1px solid ${COLORS.borderGray};
    border-radius: 4px;
    box-shadow: ${props => props.boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
    display: flex;
    flex-flow: row wrap;
    margin: ${props => props.margin || ".25rem auto" };
    max-width: ${props => props.maxWidth || "unset" };
    padding: .5rem;
    width: 99%;
    h2 {
        border: unset;
        color: ${COLORS.headerRed};
        font-family: ${FONTS.headline};
        font-weight: 800;
        letter-spacing: .25rem;
        margin: auto;
        padding: .5rem;
    }
    table {
        width: 100%;
        border-radius: 4px;
        box-shadow: ${props => props.boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
        td {
            border: 1px solid ${COLORS.borderGray};
            border-radius: 2px;
            padding: .25rem;
            text-align: center;
        }
        th {
            background-color: ${COLORS.black};
            border-radius: 2px;
            color: ${COLORS.white};
            font-weight: bold;
            padding: .25rem;
        }
    }
    .active {
        color: green;
    }
    .notActive {
        color: red;
    }
    .narrowColumn {
        width: 15%;
    }
    .descriptionColumn {
        width: 70%;
    }
    .tableData {
        padding: .25rem;
    }
    .tableItemDescription {
        padding: .25rem;
        text-align: left;
        text-transform: none;
    }

`
