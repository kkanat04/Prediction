import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer,Tooltip, XAxis, YAxis } from 'recharts';

import {rechartsData} from '../../../utils/constants';

const Recharts = () => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				data={rechartsData}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Area dataKey="uv" stroke="#8884d8" fill="#8884d8" />
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default Recharts;
